const { Model,  DataTypes, BOOLEAN } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init({
  _id: {
    type: DataTypes.INTEGER,
     allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false,
    
   },
  email: { 
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true, 
    dropDups: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
     type: DataTypes.STRING, 
     allowNull: false,
     validate: {
       len: [4],
     },
    },  
  isAdmin: { 
    type: BOOLEAN,  
    primaryKey: true, 
     default: false 
    }
},
{
  hooks: {
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
    beforeUpdate: async (updatedUserData) => {
      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      return updatedUserData;
    },
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user',
}
);

// const userModel = mongoose.model("User ", userSchema);

module.exports = User;