import NotesIcon from '@mui/icons-material/Notes';

function TopBar() {
  return (
    <>
      <div className="w-full h-20 fixed top-0 left-20 right-20 bg-white shadow-md flex items-center">
        <div className='flex items-center space-x-2 ml-5'>
          <NotesIcon fontSize='large' className='text-gray-500' />
          <span className='text-gray-500 font-medium text-2xl'>Admin Dashboard</span>
        </div>
      </div>
    </>
  )
}

export default TopBar