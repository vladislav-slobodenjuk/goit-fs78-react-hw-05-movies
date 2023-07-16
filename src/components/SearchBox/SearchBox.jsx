import { Form, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ value, onHandleSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.children.searchInput.value.trim();
    onHandleSubmit(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Icon />
      <Input
        name="searchInput"
        type="text"
        // value={value}
        // onChange={e => onChange(e.target.value)}
      />
    </Form>
  );
};
