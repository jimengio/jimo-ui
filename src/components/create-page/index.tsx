import React from "react";
import { css, cx } from "emotion";
import { column, fullHeight, flex, minHeight0, yScroll, ColorBorder, rowBetween, rowMiddle, rowCenter, rowContentCenter } from "@jimengio/jasmin-ui/lib/styles";
import { Button } from "@jimengio/jasmin-ui";

export interface CreatePageProps {
  className?: string;
  bodyClassName?: string;
  footerClassName?: string;

  hideFooter?: boolean;

  /** header */
  headerClassName?: string;
  hideHeader?: boolean;
  header?: React.ReactNode;
  leftHeader?: React.ReactNode;
  rightHeader?: React.ReactNode;
  title?: React.ReactNode;

  footer?: React.ReactNode;

  okBtnText?: string;
  cancelBtnText?: string;
  onOk?: (event: React.MouseEvent) => void;
  onCancel?: (event: React.MouseEvent) => void;
}

const CreatePage: React.FC<CreatePageProps> = props => {
  return (
    <div className={cx(fullHeight, column, props.className)}>
      <div className={cx(styleHeader, props.headerClassName)}>
        {props.header != null ? (
          props.header
        ) : (
          <div className={cx(styleHeaderContent, rowBetween, rowMiddle)}>
            {props.title != null && <div className={cx(styleTitle, rowContentCenter)}>{props.title}</div>}
            <div>{props.leftHeader}</div>
            <div>{props.rightHeader}</div>
          </div>
        )}
      </div>
      <div className={cx(flex, minHeight0, yScroll, props.bodyClassName)}>{props.children}</div>
      {!props.hideFooter && (
        <div className={cx(styleFooter, props.footerClassName)}>
          {props.footer != null ? (
            props.footer
          ) : (
            <div className={cx(fullHeight, rowContentCenter, styleFooterContent)}>
              <Button type="default" onClick={props.onCancel}>
                {props.cancelBtnText || "取消"}
              </Button>
              <Button type="primary" onClick={props.onOk}>
                {props.okBtnText || "确认"}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatePage;

const styleHeader = css`
  height: 58px;
  padding: 0 16px;
  border-bottom: 1px solid ${ColorBorder.default};
`;

const styleHeaderContent = css`
  position: relative;
  height: 100%;
`;

const styleFooter = css`
  height: 60px;
  padding: 0 16px;
  border-top: 1px solid ${ColorBorder.default};
`;

const styleFooterContent = css`
  .ant-btn:not(:last-child) {
    margin-right: 24px;
  }
`;

const styleTitle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: #323232;
`;
