document.addEventListener('DOMContentLoaded', function () {
    
    setAsideFunctions();
});

function setAsideFunctions () {
    var showButtons = document.querySelectorAll('.cart_show-button');

    showButtons.forEach(function (button) {
        button.onclick = function () {
            var block = button.parentNode.parentNode;

            if (block.classList.contains('cart__close')) {
                var openedBlocks = document.querySelectorAll('.cart:not(.cart__close)');

                openedBlocks.forEach(function (openedBlock) {
                    openedBlock.classList.add('cart__close');
                    openedBlock.querySelector('.cart_show-button').classList.add('cart_show-button__close');
                });

                block.classList.remove('cart__close');
                button.classList.remove('cart_show-button__close');
                document.body.style.overflow = 'hidden';
            }
            else {
                block.classList.add('cart__close');
                button.classList.add('cart_show-button__close');
                document.body.style.overflow = null;
            }
        }
    });
}