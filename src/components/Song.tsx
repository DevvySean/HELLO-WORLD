

const Song = (props : SongProps) => {
    return <p className="song-paragraph" >Hello {props.title}. You are {props.artist} years old.</p>
};

type SongProps = {
    title : string,
    artist : string
}

export default Song;