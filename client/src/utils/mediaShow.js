export const imageShow = (src, theme) => {
    return (
        <img src={src} alt="images" className="img-thumbnail"
            style={{ width: '100%' }} />
    )
}

export const videoShow = (src, theme) => {
    return (
        <video controls src={src} alt="images" className="img-thumbnail"
            style={{ width: '100%' }} />
    )
}