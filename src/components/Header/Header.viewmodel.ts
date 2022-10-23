import { useDisclosure } from "@chakra-ui/react";
import { useRef } from 'react';

export const useHeader = () => {
    const {  onOpen, isOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)

    return {onOpen , isOpen, onClose, btnRef}
}
