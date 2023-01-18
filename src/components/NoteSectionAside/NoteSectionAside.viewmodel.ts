import { useState } from 'react'

export const useNoteSectionAside = () => {
  const [activeModal, setActiveModal] = useState('alignment')

  const handleActiveModal = (id: string, callback: any) => {
    setActiveModal(id)
    return callback
  }

  return { activeModal, handleActiveModal }
}
