import React, { Component } from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';

class RenderImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      productImages: [],
      mainImage: [],
      tags: [],
      url: '',
      dataLoaded: false,
    };
    this.renderSingleAdded = this.renderSingleAdded.bind(this);
    this.handleToggleMainClick = this.handleToggleMainClick.bind(this);
  }

  handleToggleMainClick(image) {
    let newMainImageState = [];

    if (this.state.mainImage.includes(image.secure_url)) {
      const index = this.state.mainImage.indexOf(image.secure_url);
      newMainImageState = this.state.mainImage;
      console.log('before--->', newMainImageState);
      if (newMainImageState.length === 1) {
        newMainImageState.pop();
        console.log('.length === 1--->', newMainImageState);
      } else {
        newMainImageState.splice(1, index);
        console.log('.splice--->', newMainImageState);
      }
    } else {
      newMainImageState = this.state.mainImage;
      newMainImageState.push(image.secure_url);
    }

    console.log('after--->', newMainImageState);
    this.setState({ mainImage: newMainImageState });
  }

  renderSingleAdded() {
    return <Image publicId={this.state.url} />;
  }

  render() {
    return (
      <Grid.Column stretched width={12}>
        <Segment>
          {this.props.gallery.map(data => {
            console.log(data.secure_url, this.state.mainImage);
            return (
              <div>
                <Image
                  label={{
                    as: 'a',
                    corner: 'left',
                    icon: `${
                      this.state.mainImage.includes(data.secure_url)
                        ? 'toggle on'
                        : 'toggle off'
                    }`,
                  }}
                  src={data.secure_url}
                  size="medium"
                  bordered
                  onClick={() => this.handleToggleMainClick(data)}
                />
              </div>
            );
          })}
          {this.props.dataLoaded ? this.renderSingleAdded() : ''}
        </Segment>
      </Grid.Column>
    );
  }
}

export default RenderImages;
