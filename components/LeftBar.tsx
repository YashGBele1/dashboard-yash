import PollIcon from '@mui/icons-material/Poll';
import GroupsIcon from '@mui/icons-material/Groups';
import InsightsIcon from '@mui/icons-material/Insights';
import PostAddIcon from '@mui/icons-material/PostAdd';

function LeftBar() {
    return (
        <div className="w-20 h-full fixed left-0 bg-white shadow-2xl">
            <div className='grid grid-cols-1 justify-items-center gap-4'>
                <img src="/team.png" />

                <div className='grid grid-cols-1 justify-items-center mt-2 cursor-pointer border-2 border-fuchsia-600 px-3 py-1 rounded-xl'>
                    <PollIcon fontSize='large' className='text-fuchsia-600' />
                    <span className='text-fuchsia-500 text-xs font-medium'>Event</span>
                </div>

                <div className='grid grid-cols-1 justify-items-center mt-3 cursor-pointer'>
                    <GroupsIcon fontSize='large' className='text-gray-500' />
                    <span className='text-gray-500 text-xs font-medium'>Teams</span>
                </div>

                <div className='grid grid-cols-1 justify-items-center mt-3 cursor-pointer'>
                    <InsightsIcon fontSize='large' className='text-gray-500' />
                    <span className='text-gray-500 text-xs font-medium'>Analytics</span>
                </div>

                <div className='grid grid-cols-1 justify-items-center mt-4 cursor-pointer'>
                    <PostAddIcon fontSize='large' className='text-gray-500' />
                    <span className='text-gray-500 text-xs font-medium'>Results</span>
                </div>
            </div>
        </div>



    )
}

export default LeftBar