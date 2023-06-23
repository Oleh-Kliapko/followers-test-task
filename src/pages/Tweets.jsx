import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { TweetsList } from '@/components/TweetsList';
import { LoadMoreBtn, Dropdown, GoBackBtn } from '@/components/Buttons';
import { Error, Loader, NoTweets } from '@/utils';
import { API } from '@/services';

const PER_PAGE = 3;
let countPages = 0;

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('show all');

  const [visibleBtn, setVisibleBtn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!tweets) return;

    const fetchTweets = async () => {
      try {
        setLoading(true);
        const fetchedTweets = await API.fetchTweets(page);

        if (page === 1) {
          setTweets(fetchedTweets);
          const countTweets = await API.fetchTotalTweets();
          countPages = Math.ceil(countTweets / PER_PAGE);
          toast.success(
            `Hooray! ${countTweets} tweets were downloaded. New tweets will be displayed on top!`
          );
        } else {
          setTweets(prevTweets => [...fetchedTweets, ...prevTweets]);
        }

        if (page >= countPages) {
          setVisibleBtn(false);
          toast.info('You have reached the end of tweets. Thanks for watching');
        } else {
          setVisibleBtn(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, [page]);

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  const handleFilterChange = evt => setFilter(evt.target.value);

  if (loading) return <Loader />;

  if (error) return <Error />;

  return (
    <>
      <GoBackBtn />
      {tweets.length > 0 && (
        <>
          <Dropdown filter={filter} handleFilterChange={handleFilterChange} />
          <TweetsList tweets={tweets} filter={filter} />
          {visibleBtn && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
        </>
      )}
      {tweets.length === 0 && <NoTweets />}
    </>
  );
};
