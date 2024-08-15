import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef, RefObject } from "react";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export type AccordionComponentItem = {
  header: string;
  content: React.ReactNode;
};
export type AccordionComponentProps = {
  accordionItems: AccordionComponentItem[];
};

const AccordionItem = forwardRef(
  (
    { children, className, ...props }: Accordion.AccordionItemProps,
    forwardedRef
  ) => (
    <Accordion.Item
      className={classNames(
        "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
        className
      )}
      {...props}
      ref={forwardedRef as unknown as RefObject<HTMLDivElement>}
    >
      {children}
    </Accordion.Item>
  )
);

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef(
  (
    { children, className, ...props }: Accordion.AccordionTriggerProps,
    forwardedRef
  ) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className
        )}
        {...props}
        ref={forwardedRef as unknown as RefObject<HTMLButtonElement>}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef(
  (
    { children, className, ...props }: Accordion.AccordionContentProps,
    forwardedRef
  ) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef as unknown as RefObject<HTMLDivElement>}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export const AccordionComponent = ({
  accordionItems,
}: AccordionComponentProps) => (
  <Accordion.Root type="single" defaultValue="item-0" collapsible>
    {accordionItems.map(({ content, header }, index) => {
      const accordionValue = `item-${index}`;
      return (
        <AccordionItem value={accordionValue} key={accordionValue}>
          <AccordionTrigger>{header}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      );
    })}
  </Accordion.Root>
);

export default AccordionComponent;
