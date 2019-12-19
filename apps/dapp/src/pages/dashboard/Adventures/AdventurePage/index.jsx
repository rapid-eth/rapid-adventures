/**
 * @function NoteItemSmall
 * @param {Object} props
 * @returns {Object} component
 */
/* --- Global --- */
import {useState} from 'react';
import {QuestStorageItem} from 'views';

/* --- Local --- */
import Edit from './edit';

/* --- Component --- */
const NoteItemSmall = props => {
  const [isPreview, setIsPreview] = useState(false);
  const [contentEdit, setContentEdit] = useState(false);
  const [saveRequest, setSaveRequest] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  /* --- Item State --- */
  const [reward, setReward] = useState(props.data.reward);
  const [rewardTag, setRewardTag] = useState(props.data.rewardTag);
  const [quests, setQuests] = useState(props.data.quests);

  const toggleEdit = () => setIsEdit(!isEdit);
  const handlePreviewRequest = () => setIsPreview(!isPreview);
  const handleSaveRequest = () => {
    setSaveRequest(!saveRequest);
    setIsEdit(!isEdit);
  };

  return (
    <>
      {saveRequest && (
        <CMS.StorageInsert
          address={ROOT}
          space={SPACE}
          index={INDEX_DEFAULT}
          delta={props.delta}
          data={{
            name: props.name,
            tagline: props.tagline,
            content: contentEdit,
          }}
        />
      )}
      <A.Box flex={1} width="100%">
        <A.Flex
          center
          column
          minHeight={220}
          py={6}
          color="white"
          gradient="blueDark"
          flex={1}>
          <A.BackgroundImage
            opacity={0.2}
            ratio={0.4}
            src={props.data.imageCover}
          />
          <A.Heading giga heavy>
            {props.data.name}
          </A.Heading>
          <A.Heading lg>{props.data.tagline}</A.Heading>
          <A.HorizontalRule dash my={3} />
          <A.Flex alignCenter mt={3}>
            <A.Heading xl wordBreakAll noMargin>
              {reward}
            </A.Heading>
            <A.Span ml={2}>
              <A.Span tag="blue" sm>
                {rewardTag}
              </A.Span>
            </A.Span>
          </A.Flex>
        </A.Flex>

        <A.Flex>
          <A.Flex column gradient="gray" flex={3} p={4}>
            <AdventureGuides address="0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE" />
            <AdventureLeaderboards
              address="0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE"
              styled={{mt: 4}}
            />
          </A.Flex>
          <A.Flex column flex={7} p={3}>
            <A.Box>
              <MainContent
                {...props}
                isEdit={isEdit}
                setContentEdit={setContentEdit}
                isPreview={isPreview}
              />
              <A.Flex gutter2>
                {quests &&
                  quests.length > 0 &&
                  quests.map(quest => (
                    <QuestRetrieve component={QuestStorageItem} delta={quest} />
                  ))}
              </A.Flex>
            </A.Box>
          </A.Flex>
        </A.Flex>
      </A.Box>
    </>
  );
};

NoteItemSmall.defaultProps = {
  styled: {
    width: '100%',
  },
};

NoteItemSmall.propTypes = {
  string: PropTypes.string,
};

const AdventureGuides = props => {
  return (
    <A.Box width="100%" {...props.styled}>
      <A.Heading heavy>Guides</A.Heading>
      <A.HorizontalRule my={2} />
      <A.Flex column flex={1} mt={2}>
        {/* <ProfileLineItem address={props.address} />
        <ProfileLineItem address={props.address} /> */}
      </A.Flex>
    </A.Box>
  );
};

const AdventureLeaderboards = props => {
  return (
    <A.Box width="100%" {...props.styled}>
      <A.Heading heavy>Leaderboards</A.Heading>
      <A.HorizontalRule my={2} />
      <A.Flex column flex={1} mt={2}></A.Flex>
    </A.Box>
  );
};

const MainContent = props => {
  return (
    <A.Flex column flex={1}>
      <A.Flex alignCenter between px={20}>
        <A.Heading xl heavy>
          Getting Started
        </A.Heading>
        <A.Span xs gem="white">
          The Adventure Index
        </A.Span>
      </A.Flex>

      <A.HorizontalRule />
      <A.Box py={3}>
        {props.data.content && (
          <>
            {props.isEdit ? (
              <Edit
                html={props.data.content}
                onSave={props.setContentEdit}
                isPreview={props.isPreview}
              />
            ) : (
              <A.Markdown styled={{pt: 10, pb: 30, px: 20}}>
                {props.data.content}
              </A.Markdown>
            )}
          </>
        )}
      </A.Box>
    </A.Flex>
  );
};

export default NoteItemSmall;
