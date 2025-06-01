from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import os

class NeuralNetworks(VoiceoverScene):
    def add_subcaption(self, text, **kwargs):
        pass # This disables all subtitles

    def construct(self):
        self.set_speech_service(GTTSService(lang="en", tld="com.au"))
        
        # Title
        title = Text("Neural Networks Explained", font_size=48).to_edge(UP)
        with self.voiceover(text="Let's explore the basic concept of a neural network.") as tracker:
            self.play(Write(title), run_time=tracker.duration)
            self.wait(0.5)
        
        # Main content sections
        
        # Neuron representation
        with self.voiceover(text="A neural network is made up of interconnected nodes, called neurons.") as tracker:
            circle = Circle(radius=1, color=BLUE).move_to(LEFT*3)
            text = Text("Neuron", font_size=24).next_to(circle, DOWN)
            self.play(Create(circle), Write(text), run_time=tracker.duration)
            self.wait(0.2)
        
        # Input & Weights
        with self.voiceover(text="Each connection has a weight, indicating its importance. Inputs are multiplied by these weights.") as tracker:
            input_line = Line(circle.get_left() + RIGHT*2, circle.get_left(), color=RED)
            weight = MathTex("w_1", color=YELLOW).next_to(input_line, UP)
            self.play(Create(input_line), Write(weight), run_time=tracker.duration)
            self.wait(0.2)

            input_line2 = Line(circle.get_left() + RIGHT*2 + UP, circle.get_left() + UP, color=RED)
            weight2 = MathTex("w_2", color=YELLOW).next_to(input_line2, UP)
            self.play(Create(input_line2), Write(weight2), run_time=tracker.duration)
            self.wait(0.2)

        # Activation function
        with self.voiceover(text="The neuron applies an activation function to the weighted sum of its inputs.") as tracker:
            function = MathTex("\\sigma(x)", color=GREEN).next_to(circle, RIGHT)
            self.play(Write(function), run_time=tracker.duration)
            self.wait(0.2)
        
        # Simple Network
        with self.voiceover(text="These neurons are arranged in layers. The output of one layer becomes the input to the next.") as tracker:
            circle2 = Circle(radius=1, color=BLUE).move_to(RIGHT*3)
            arrow = Arrow(circle.get_right(), circle2.get_left(), buff=0.5)
            self.play(Create(circle2), Create(arrow), run_time=tracker.duration)
            self.wait(0.2)
        
        # Final summary
        with self.voiceover(text="Neural networks are used in many applications, such as image recognition and natural language processing.") as tracker:
            #image = ImageMobject("neural_network_image.png").scale(0.4).to_edge(DOWN) # Replace with an actual image if available in your project
            # If you don't have an image available, use this instead:
            image = Text("Applications: Image Recognition, NLP", font_size=24).to_edge(DOWN)

            self.play(FadeIn(image), run_time=tracker.duration)
            self.wait(1)

