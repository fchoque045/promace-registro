import NextLink from 'next/link'
import Image from 'next/image';
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography, Link } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar>
            <Toolbar>

                <NextLink href="/" passHref legacyBehavior>
                    <Link display='flex' alignItems='center'>
                        <Image 
                            src="/logoPromace.svg"
                            alt="LogoPromace"
                            width={75}
                            height={35}
                        />
                    </Link>
                </NextLink>

                <Box flex={1} />

                <NextLink href="/" passHref legacyBehavior>
                    <Link>
                        <Button>Registro</Button>
                    </Link>
                </NextLink>

            </Toolbar>
        </AppBar>
  )
}

