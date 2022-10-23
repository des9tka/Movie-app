
const Switcher = () => {
    const theme = "light";
    return (
        <div>
            <button type="checkbox" id="checkbox" className={'ChangeTheme'} onClick={() => {
                if (theme === 'light'){
                document.body.classList.toggle('dark')
                    } else {
                    document.body.classList.toggle('body')
                }
            }}>Switcher</button>
        </div>
    )
}

export {
    Switcher
}