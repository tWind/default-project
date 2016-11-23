module.exports = {
    sprite: {
        src             : ['<%= project.images %>/sprites/icons/*.png'],
        dest            : '<%=project.app %>/img/icons-sprite.png',
        retinaSrcFilter : ['<%= project.images %>/sprites/icons/*@2x.png'],
        retinaDest      : '<%=project.app %>/img/icons-sprite@2x.png',
        imgPath         : '../img/icons-sprite.png',
        retinaImgPath   : '../img/icons-sprite@2x.png',
        destCss         : '<%=project.blocks%>/global/sprites/icons-sprite.scss'
    }
};