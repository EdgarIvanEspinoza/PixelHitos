import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from '@heroui/react';

export const ItemModal = ({
  isOpen,
  setIsOpen,
  list,
  Loading,
  selected,
  goLeft,
  goRight,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  list?: {
    title: string;
    price: string;
    img: string;
  }[];
  Loading: boolean;
  selected: number;
  goLeft: () => void;
  goRight: () => void;
}) => {
  return (
    <>
      {!Loading && list && (
        <Modal
          backdrop={'blur'}
          isOpen={isOpen}
          size={'lg'}
          onClose={() => setIsOpen(false)}
        >
          <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">
                {list[selected]?.title}
                <p className="text-default-500 text-small">
                  {list[selected]?.price}
                </p>
              </ModalHeader>
              <ModalBody>
                <Image
                  alt={list[selected]?.title}
                  radius="lg"
                  shadow="sm"
                  src={list[selected]?.img}
                  width="100%"
                />
              </ModalBody>
              <ModalFooter className="flex justify-between">
                {selected === 0 ? null : (
                  <Button color="warning" variant="light" onPress={goLeft}>
                    <Image
                      alt="Left arrow"
                      src="/assets/icons/arrowBigLeft.svg"
                    />
                  </Button>
                )}
                {selected === list.length - 1 ? null : (
                  <Button
                    color="warning"
                    variant="light"
                    onPress={goRight}
                    className="ml-auto"
                  >
                    <Image
                      alt="Right arrow"
                      src="/assets/icons/arrowBigRight.svg"
                    />
                  </Button>
                )}
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
