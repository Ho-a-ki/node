

// module.exports = (sequelize , DataTypes) => (
//     sequelize.define('uesr', {
//         email: {
//             type: DataTypes.STRING(40),
//             allowNull: false,
//             unique: true,
//         },
//         nick: {
//             type: DataTypes.STRING(15),
//             allowNull:false,
//         },
//         passwrod: {
//             type: DataTypes.STRING(100),
//             allowNull: false,
//         },
//         provider: {
//             type: DataTypes.STRING(10),
//             allowNull: false,
//             defaultValue:'local',
//         },
//         snsId: {
//             type: DataTypes.STRING(30),
//             allowNull: true,
//         },
//     }, {
//         timestamps: true,
//         paranoid: true,
//     })
// );

// // 사용자 정보를 저장하는 모듈.
// // provider가 local 이면 로컬, kakao면 카카오로그인.


module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
      email: {
        type: DataTypes.STRING(40),
        allowNull: true,
        unique: true,
      },
      nick: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      provider: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'local',
      },
      snsId: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
    })
  );