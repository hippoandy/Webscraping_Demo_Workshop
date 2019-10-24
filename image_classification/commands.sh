### image classification

## part 1. model training

# for python 2
python retrain.py --img_dir=../training_imgs

# for python 3
python3 retrain.py --img_dir=../training_imgs

## part 2. perform classification

# for python 2
python label_image.py \
    --graph=/tmp/output_graph.pb --labels=/tmp/output_labels.txt \
    --input_layer=Placeholder \
    --output_layer=final_result \
    --image ./*.jpg

# for python 3
python3 label_image.py \
    --graph=/tmp/output_graph.pb --labels=/tmp/output_labels.txt \
    --input_layer=Placeholder \
    --output_layer=final_result \
    --image ./*.jpg