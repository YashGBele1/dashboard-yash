import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';

function RightBar() {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: 'rgb(192 38 211)',
            color: 'rgb(192 38 211);',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    const StyledBadgeOnIcon = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: 'rgb(34 197 94);',
            color: 'rgb(34 197 94);;',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <div className="w-20 h-full fixed right-0 bg-white shadow-2xl">
            <div className='grid grid-cols-1 justify-items-center gap-10 mt-5'>
                <Stack direction="row" spacing={2} className='cursor-pointer'>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        variant="dot"
                    >
                        <Avatar alt="Remy Sharp" src="/team.png" variant="rounded" />
                    </StyledBadge>
                </Stack>

                <Stack direction="row" spacing={2} className='cursor-pointer'>
                    <StyledBadgeOnIcon
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                    >
                        <CircleNotificationsIcon fontSize='large' className='text-gray-500' />
                    </StyledBadgeOnIcon>
                </Stack>

                <Stack direction="row" spacing={2} className='cursor-pointer'>
                    <StyledBadgeOnIcon
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                    >
                        <ForumIcon fontSize='large' className='text-gray-500' />
                    </StyledBadgeOnIcon>
                </Stack>

                <SettingsIcon fontSize='large' className='text-gray-500 cursor-pointer' />
            </div>
        </div>
    )
}

export default RightBar