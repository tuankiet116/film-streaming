const fs = require('fs')

module.exports = (start, end, filename) => {
    fs.stat(filename, (err, stats) => {
        if (err) {
            if (err.code == 'ENOENT') {
                throw new Error(err)
            }
        }

        let file_size = stats.size;
        end = end ? end : file_size - 1;

        let chunksize = (end - start) + 1;

        let stream_position = {
            start: start,
            end: end
        }

        let head = {
			'Content-Range': 'bytes ' + start + '-' + end + '/' + file_size,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'video/mp4'
		}

        return {
            positions: stream_position,
            head: head
        }
    })
}