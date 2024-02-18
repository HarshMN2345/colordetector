

const Square = ({ colorval }) => {
  return (
    <>
      <section className="square" style={{ backgroundColor: colorval }}>
        {colorval === 'white' ? (
          <div>
            <h1 className="special">Square</h1>
            <p className="sep">{colorval ? colorval : 'empty value'}</p>
          </div>
        ) : (
          <>
            <h1>Square</h1>
            <p>{colorval ? colorval : 'empty value'}</p>
          </>
        )}
      </section>
    </>
  );
};

Square.defaultProps = {
  colorval: 'black'
};

export default Square;
