import * as React from 'react';

export interface ISaasItemProps {
  title: string;
  description: string;
  url: string;
  image: string;
  icon: string;
};

export interface ISaasItemState {};

export class SaasItem extends React.Component<ISaasItemProps, ISaasItemState> {
  render() {
    return (
      <a href={this.props.url} target="_blank" className="card-content">
        <div className="card-icon">
          {
            (this.props.image && <img src={this.props.image} alt=""/>) ||
            (this.props.icon && <span className={"icon " + this.props.icon} aria-hidden="true"></span>)
          }
        </div>
        <div className="card-title">{this.props.title}</div>
        {this.props.description}
        {/* <truncate-long-text
                class="card-description hidden-xs"
                content="{this.props.description}"
                limit="120"
                use-word-boundary="true">
        </truncate-long-text> */}
      </a>
    );
  }
}
