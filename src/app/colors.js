const primaryColor = '#5c3cac'
const secundaryColor = '#21233a'

// #21233a
// #22233f
// #171934

const primaryColorOpacity = (opacity) => `rgba(94, 104, 212, ${opacity})`
const secundaryColorOpacity = (opacity) => `rgba(33, 35, 58, ${opacity})`
const primaryColorsOpacity = (opacity1, opacity2) => `rgba(94, 104, 212, ${opacity1}), rgba(62, 69, 142, ${opacity2 || opacity1})`

export default { primaryColor, primaryColorOpacity, primaryColorsOpacity, secundaryColor, secundaryColorOpacity }