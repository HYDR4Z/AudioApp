const BodyLoad = () => {
    const LoadWrapper = document.getElementsByClassName('LoadingWrapper')[0];
    LoadWrapper.classList.remove('visible');
    setTimeout(function (){
        LoadWrapper.classList.add('gone');
    }, 600);
}