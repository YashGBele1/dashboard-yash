function Main() {
    return (
        <div className='bg-gray-200 fixed top-20 left-20 right-20 h-full p-5'>
            <div className='flex items-center space-x-5 px-1'>
                <button className="text-gray-500 font-semibold text-sm">Event Setting</button>
                <div className="text-gray-500 font-bold text-xl">|</div>
                <button className="text-gray-500 font-semibold text-sm">Engage and Network</button>
                <div className="text-gray-500 font-bold text-xl">|</div>
                <button className="text-gray-500 font-semibold text-sm">Event Marketing</button>
                <div className="text-gray-500 font-bold text-xl">|</div>
                <button className="text-gray-500 font-semibold text-sm">Tickets</button>
                <div className="text-gray-500 font-bold text-xl">|</div>
                <button className="text-gray-500 font-semibold text-sm">Attendees</button>
                <div className="text-gray-500 font-bold text-xl">|</div>
                <button className="text-fuchsia-600 font-bold bg-white shadow-xl rounded-xl px-2 py-1 text-sm">Event Content</button>
                <div className="text-gray-500 font-bold text-xl">|</div>
                <button className="text-gray-500 font-semibold text-sm">Publish</button>
            </div>

            <div className="flex h-full">
                <div className="mt-5 pb-28 bg-white rounded-xl border-2">
                    <h1 className="px-5 py-3 text-xl text-gray-500">Event Content</h1>
                    <hr />
                    <p className="px-5 py-3 text-gray-500 font-medium cursor-pointer">Basics</p>
                    <p className="px-5 py-3 text-gray-500 font-medium cursor-pointer">Branding</p>
                    <p className="px-5 py-3 text-gray-500 font-medium cursor-pointer">Agenda</p>
                    <p className="px-5 py-3 text-fuchsia-600 font-medium cursor-pointer bg-gray-200 border-l-4 border-fuchsia-600">Virtual/Hybrid Center</p>
                    <p className="px-5 py-3 text-gray-500 font-medium cursor-pointer">Speaker Center</p>
                    <p className="px-5 py-3 text-gray-500 font-medium cursor-pointer">Sponsor Center</p>
                </div>
                <div className="relative w-[80%] mt-5 pb-28 bg-white rounded-xl border-2">
                    <h1 className="px-5 py-3 text-xl text-fuchsia-600 font-medium">Virtual/Hybrid Center</h1>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Main