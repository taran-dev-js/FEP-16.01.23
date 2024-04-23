const wrapper = document.querySelector('.tabs-title-wrapper')

wrapper.addEventListener('click', (event) => {
    const target = event.target;
    const isActiveClass = 'isActive'

    const removeActiveClass = (element) => {
        if(element.classList.contains(isActiveClass)) {
            element.classList.remove(isActiveClass)
        }
    }

    if (!target.classList.contains('tabs-btn')) return

    const currentId = target.id
    const btnList = document.querySelectorAll('.tabs-btn');

    btnList.forEach((item) => removeActiveClass(item))

    target.classList.add(isActiveClass)

    const contentList = document.querySelectorAll('[data-content-id]');
    const currentContent = document.querySelector(`[data-content-id=${currentId}]`);

    contentList.forEach((item) => removeActiveClass(item))
    currentContent.classList.add(isActiveClass)


    const params = new URLSearchParams(window.location.search)
    params.set('tabs', currentId)
    window.history.pushState({ page: 'test page' }, null, `?tabs=${currentId}`)

})

window.addEventListener('popstate', (event) => {
    console.log(event);
});
