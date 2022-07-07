module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy'
  }
}

// jest不认识css文件，通过identity-obj-proxy让jest对所有引入的文件
// 当做一个普通的对象，防止发生不识别文件的错误