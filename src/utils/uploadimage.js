import { NFTStorage } from 'nft.storage';

export const uploadImage = async image => {
  const apiKey = process.env.REACT_APP_KEY;

  if (apiKey) {
    const imageStorage = new NFTStorage({ token: apiKey });

    const prefix = 'https://ipfs.io/ipfs/';

    const returnData = await imageStorage.store({
      image,
      name: 'dao-image',
      description: 'dao-image-description',
    });

    const ipfsUrl = returnData?.data?.image?.pathname;

    return prefix + ipfsUrl.slice(2);
  }

  throw new Error('No API key found');
};
