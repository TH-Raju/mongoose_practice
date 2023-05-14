import mongoose from 'mongoose';
import app from './app';

const port: number = 5000


//database connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('Database Connection Successful');

        app.listen(port, () => {
            console.log(`Server Running on port ${port}`)
        })
    } catch (err) {
        console.log(`Failed to Connect Database`, err);
    }
}

main()


