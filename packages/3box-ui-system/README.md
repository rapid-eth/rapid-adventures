# 3Box UI System

## Examples

### Login

```js
import { Login } from '@kames/3box-system';
const Component = props => {
  return <Login />;
};
```

### AccessProfile

```js
import { AccessProfile } from '@kames/3box-system'
const Component = props => {
 return(
  <AccessProfile>
    <MyFormComponent />
  </AccessThread>
)}
```

### AccessSpace

```js
import { AccessSpace } from '@kames/3box-system'
const Component = props => {
 return(
  <AccessSpace space='web3'>
    <MyFormComponent />
  </AccessThread>
)}
```

### AccessThread

```js
import { AccessThread } from '@kames/3box-system'
const Component = props => {
 return(
  <AccessThread
    space='web3'
    thread='comments'
    threadOptions={
      members: true,
    }
  >
    <MyFormComponent />
  </AccessThread>
)}
```

### MessagePost

```js
import { MessagePost } from '@kames/3box-system';
const Component = props => {
  return (
    <MessagePost threadName="comments">
      <span>delete thread message</span>
    </MessagePost>
  );
};
```

### MessageDelete

```js
import { MessageDelete } from '@kames/3box-system';
const Component = props => {
  return (
    <MessageDelete threadName="comments" postId="123456689">
      <span>Delete Message</span>
    </MessageDelete>
  );
};
```

### ThreadJoin

```js
import { ThreadJoin } from '@kames/3box-system';
const Component = props => {
  return (
    <ThreadJoin space="web3" threadName="comments">
      <span>Join Thread</span>
    </ThreadJoin>
  );
};
```
