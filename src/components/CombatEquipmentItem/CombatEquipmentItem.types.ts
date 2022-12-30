export type CombatEquipmentItemProps = {
  id?: string
  size?: 'md' | 'lg'
  type?: 'magic' | 'ammo' | 'helmet' | 'armor' | 'weapon' | 'shield' | 'misc'
  primaryInfo?: string
  secondaryInfo?: string
  image?: string
}
