
import * as  fsExtra from 'fs-extra'

const fs = {
    ...fsExtra,
    isDirectory: async (path) => {
        const stat = await fs.stat(path)
        return stat.isDirectory()
    },
    isDirectorySync: path => fs.statSync(path).isDirectory()
}

export default fs
