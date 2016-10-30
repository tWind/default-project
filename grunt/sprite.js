module.exports = {
    sprite: {
        src: '<%= project.images %>/sprites/icon/*.png',
        dest: '<%= project.images %>/icon-sprite.png',
        destCss: '<%=project.blocks%>/global/sprites/icon-sprite.scss',
        imgPath: '../img/icon-sprite.png',
        cssFormat: 'scss',
        algorithm: 'binary-tree',
        padding: 8
    }
};