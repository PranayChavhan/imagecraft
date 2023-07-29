import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Card } from '../components/Card';
import Topbar from '../components/TopBar';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <Text className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</Text>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://ai-art-oqkg.onrender.com/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  return (
    
    
    <View >
        <Topbar/>
      <View className="max-w-7xl mx-auto px-[2px]">
      <View>
        <Text className="font-extrabold text-[#222328] text-[30px]">AI Art Showcase</Text>
        <Text className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Discover a Gallery of AI-Powered Masterpieces, Each a Unique Blend of Technological Brilliance and Aesthetic Beauty.</Text>
      </View>

      {/* <View className="mt-16">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </View> */}

      {/* <View className="mt-10">
        {loading ? (
          <View className="flex justify-center items-center">
            <Loader />
          </View>
        ) : (
          <>
            {searchText && (
              <Text className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for <Text className="text-[#222328]">{searchText}</Text>:
              </Text>
            )}
            <View className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="No Posts Yet"
                />
              )}
            </View>
          </>
        )}
      </View> */}
    </View>
      {/* <Footer/> */}
    </View>
  );
};

export default Home;
