
module.exports = (sequelize, DataTypes) => (
    sequelize.define('domain', {
        host : {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(10),
            allowNull: false,
            
        },
        clientSecret : {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
    }, {
        validate : {
            unknownType() {
                console.log(this.type, this.type !== 'free', this.type !== 'premium')
                if (this.type !== 'free' && this.type !== 'premium') {
                    throw new Error ("type 컬럼은 free나 premium 이어야 합니다.")
                }
            }
        },
        timestamp : true,
        paranoid: true,
    })
)

// 도메인 모델에는 인터넷 주소(host)와 종류(type), 클라이언트 비밀키(ClientSecret)이 들어간다.
// API를 사용할때 필요한 비밀키.

