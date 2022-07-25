// axios
const axios = require('axios');

export default function Admin() {
    axios.get('/api/PushSetup').then(() => {
    });

    return (
        <div className="min-h-screen min-w-screen">
            <div className="bg-black/40 absolute inset-y-10 inset-x-48 rounded-xl">
                <h1 className="text-white font-bold shadow-black drop-shadow-xl text-xl">{'< Tagr /> Setup'}</h1>
            </div>
        </div>
    );
}