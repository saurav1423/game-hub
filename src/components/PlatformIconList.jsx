import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { HStack, Icon, Text } from '@chakra-ui/react'

const PlatformIconList = ({platforms}) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }
      

  return (
    <>
      <HStack marginY={2}>  //1 mtlb 4 px
         {platforms.map(p => <Icon as={iconMap[p.platform.slug]} color={'gray.500'} />)}
      </HStack>
    </>
  )
}

export default PlatformIconList