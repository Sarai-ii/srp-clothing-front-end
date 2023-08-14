export default function FourOFour() {


    const style404 = {
        color: 'rgb(33, 209, 146)',
        fontSize: '48px',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px auto', // Center horizontally with some top margin
        textAlign: 'center',
      };

    return (
        <div className="FourOFour" style={{textAlign:'center'}}>
            <h1 style={{fontSize:"80px", marginTop: '20px'}}>404</h1>
            <div className="404-text" style={style404}>
                <p style={{ marginBottom: '50px' }}>The page you are looking for cannot be found, but there are tons of other great deals to search for.</p>
            </div>
        </div>
    )
}