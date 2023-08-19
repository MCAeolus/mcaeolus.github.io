export const rainbow = (args: string[]) => {
    const footers = document.getElementsByTagName('footer')[0]?.
        getElementsByTagName('pre'); //we have two footers, apply to both
    for (let i = 0; i < footers.length; i++) {
        let footer = footers[i];
        if (footer.classList.contains('rainbow_text_animated'))
            footer.classList.remove('rainbow_text_animated');
        else
            footer.classList.add('rainbow_text_animated');
    }
}