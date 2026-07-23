class UserService {
    async createUser(user) {
        const { user_name, password } = user
        return '写入数据库成功'
        // const user = await User.create({ user_name, password })
        // return user
    }
}

module.exports = new UserService()