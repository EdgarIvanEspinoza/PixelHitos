import { useGetImages } from '@/hooks/useGetImages';
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';

type Props = {
  goLeft: () => void;
  goRight: () => void;
  isOpen: boolean;
  selectedItemIndex: string;
  setIsOpen: (isOpen: boolean) => void;
};

export const ItemModal = ({
  goLeft,
  goRight,
  isOpen,
  selectedItemIndex,
  setIsOpen,
}: Props) => {
  console.log(selectedItemIndex);
  const { data, isLoading } = useGetImages({
    id: selectedItemIndex,
  });
  console.log(data);

  return (
    <>
      {!isLoading && (
        <Modal
          backdrop={'blur'}
          isOpen={isOpen}
          size={'lg'}
          onClose={() => setIsOpen(false)}
        >
          <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">
                {data?.title}
                <p className="text-default-500 text-small">{data?.price}</p>
              </ModalHeader>
              <ModalBody>
                <Image
                  alt={data?.title}
                  radius="lg"
                  shadow="sm"
                  src={data?.img}
                  width="100%"
                />
              </ModalBody>
              <ModalFooter className="flex justify-between">
                {goLeft !== null && (
                  <Button color="warning" variant="light" onPress={goLeft}>
                    <Image
                      alt="Left arrow"
                      src="/assets/icons/arrowBigLeft.svg"
                    />
                  </Button>
                )}
                {goRight !== null && (
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
