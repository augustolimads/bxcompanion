export const getEquipmentImage = (imageRef: string) => {
  const basePath = (item: string) => `/images/equipments/${item}.png`
    switch (imageRef) {
      case 'espada-curta':
        return basePath('sword')
      case 'espada-longa':
        return basePath('SwordT2')
      case 'placas':
        return basePath('armor')
      case 'machado':
        return basePath('AxeSingle')
      case 'machado-de-batalha':
        return basePath('axeDouble')
      case 'mochila':
        return basePath('backpack')
      case 'botas':
        return basePath('Boots')
      case 'arco':
        return basePath('BowLoaded')
      case 'adaga':
        return basePath('dagger')
      case 'martelo':
        return basePath('hammer')
      case 'elmo':
        return basePath('helmet')
      case 'couro':
        return basePath('leather')
      case 'malha':
        return basePath('leather2')
      case 'colar':
        return basePath('necklace')
      case 'veneno':
        return basePath('potion')
      case 'pocao':
        return basePath('potion4')
      case 'pergaminho':
        return basePath('scroll')
      case 'escudo':
        return basePath('shield_semi')
      case 'varinha':
        return basePath('wand2')
      case 'flecha':
        return basePath('Arrow')
      case 'lanca':
        return basePath('SpearT2')
      default:
        return basePath('backpack')
    }
  }