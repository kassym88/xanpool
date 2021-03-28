import React from 'react';
import {useHistory} from "react-router";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {ROUTES} from "../../routes";
import {withParams} from "../../utils/utils";

const SearchPage: React.FC = () => {
  const history = useHistory();
  const [userName, setUserName] = React.useState<string>('');

  const search = React.useCallback(() => {
    const url = withParams(ROUTES.REPOS, [{name: 'userName', val: userName}]);
    history.push(url);
  }, [userName, history]);

  return (
    <InputGroup className="mb-3" data-testid="Search">
      <FormControl
        placeholder="Username or email address"
        aria-label="Username or email address"
        aria-describedby="basic-addon2"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        onKeyPress={(e: React.KeyboardEvent) => e.charCode === 13 ? search() : null}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={search}
        >Search</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchPage;
