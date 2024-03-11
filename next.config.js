module.exports = {
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'content-type',
              value: 'image/x-icon',
            },
          ],
        },
      ]
    },
  }