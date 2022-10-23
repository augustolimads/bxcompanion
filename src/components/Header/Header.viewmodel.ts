import { useDisclosure } from "@chakra-ui/react";
import React from 'react';

export const useHeader = () => {
    const {  onOpen, isOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return {btnRef, onOpen , isOpen, onClose}
}