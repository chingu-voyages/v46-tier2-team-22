import { useState, useEffect } from "react";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";


CardList.propTypes = {
  cardDetails: PropTypes.array.isRequired,
  isPopupOpen: PropTypes.bool.isRequired,
};

function CardList({ cardDetails, isPopupOpen }) {
  // const popUp = PopupOpen;
  const renderedCards = 6; 
  const recipes = cardDetails;
  const [loadMore, setLoadMore] = useState(renderedCards);
  const controls = useAnimation();

  const staggerDuration = 0.1;
  const cardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    const animateCards = async () => {
      await controls.start("visible");
    };

    animateCards();

    if (loadMore > 0) {
      controls.start("hidden");
    }
  }, [loadMore]);

  const handleLoadMore = () => {
    setLoadMore(loadMore + renderedCards);
  };

  return (
    <div className="flex flex-col">
      <div
        className="relative flex flex-col md:flex-row flex-wrap items-center justify-center mx-auto mb-5 py-6 bg-Gunmetal-gray w-screen max-w-screen-2xl"
        id="card-holder"
      >
        {recipes.slice(0, loadMore).map((recipe, index) => (
          <motion.div
            key={recipe.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * staggerDuration,
            }}
          >
            <Card recipe={recipe} key={recipe.id} isPopupOpen={isPopupOpen} />
          </motion.div>
        ))}
      </div>
      {loadMore < recipes.length && (
        <button
          onClick={handleLoadMore}
          className="w-36 border border-black m-4 p-3 rounded-sm self-center"
        >
          load more
        </button>
      )}
    </div>
  );
}

export default CardList;
