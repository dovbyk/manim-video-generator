from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import os

class Backpropagation(VoiceoverScene):
    def add_subcaption(self, text, **kwargs):
        pass # This disables all subtitles

    def construct(self):
        self.set_speech_service(GTTSService(lang="en", tld="com.au"))

        # Title
        title = Text("Backpropagation", font_size=48).to_edge(UP)
        with self.voiceover(text="Let's explore the concept of backpropagation, the cornerstone of training neural networks.") as tracker:
            self.play(Write(title), run_time=tracker.duration)
        self.wait(0.5)

        # --- Network Setup ---
        input_layer = VGroup(*[Dot(point=[i-1, -2, 0], color=BLUE) for i in range(3)])
        hidden_layer = VGroup(*[Dot(point=[i-0.5, 0, 0], color=BLUE) for i in range(2)])
        output_layer = Dot(point=[0, 2, 0], color=BLUE)

        input_labels = VGroup(*[MathTex(f"x_{i+1}") for i in range(3)]).arrange(RIGHT).next_to(input_layer, LEFT)
        hidden_labels = VGroup(*[MathTex(f"h_{i+1}") for i in range(2)]).arrange(RIGHT).next_to(hidden_layer, LEFT)
        output_label = MathTex("y").next_to(output_layer, LEFT)

        self.add(input_layer, hidden_layer, output_layer, input_labels, hidden_labels, output_label)

        # Connect the layers
        connections_1 = VGroup(*[Line(input_layer[i].get_center(), hidden_layer[j].get_center(), color=GRAY, stroke_width=1) for i in range(3) for j in range(2)])
        connections_2 = VGroup(*[Line(hidden_layer[i].get_center(), output_layer.get_center(), color=GRAY, stroke_width=1) for i in range(2)])

        with self.voiceover(text="Imagine a simple neural network with input, hidden, and output layers.") as tracker:
            self.play(Create(connections_1), Create(connections_2), run_time=tracker.duration)
        self.wait(0.2)

        # --- Forward Pass ---
        with self.voiceover(text="During the forward pass, data flows from the input, through the network, and generates a prediction.") as tracker:
            self.play(connections_1.animate.set_color(GREEN), connections_2.animate.set_color(GREEN), run_time=tracker.duration)
        self.wait(0.2)
        self.play(connections_1.animate.set_color(GRAY), connections_2.animate.set_color(GRAY))

        # --- Error Calculation ---
        error = MathTex("E = (y_{predicted} - y_{true})^2").to_edge(DOWN)
        with self.voiceover(text="The prediction is then compared to the true value to calculate an error.") as tracker:
            self.play(Write(error), run_time=tracker.duration)
        self.wait(0.2)

        # --- Backpropagation Intro ---
        with self.voiceover(text="Backpropagation is the process of adjusting the network's weights based on this error.") as tracker:
            self.play(error.animate.set_color(RED), run_time=tracker.duration)
        self.wait(0.2)
        self.play(error.animate.set_color(WHITE))

        # --- Gradient Descent ---
        gradient_flow = VGroup(*[Line(output_layer.get_center(), hidden_layer[i].get_center(), color=YELLOW, stroke_width=3, path_arc=0.2) for i in range(2)])
        gradient_flow_2 = VGroup(*[Line(hidden_layer[i].get_center(), input_layer[j].get_center(), color=YELLOW, stroke_width=3, path_arc=0.2) for i in range(2) for j in range(3)])
        with self.voiceover(text="The error signal is propagated back through the network, layer by layer, calculating gradients.") as tracker:
            self.play(Create(gradient_flow), run_time=tracker.duration * 0.5)
            self.play(Create(gradient_flow_2), run_time=tracker.duration * 0.5)
        self.wait(0.2)

        # --- Weight Adjustment ---
        weight_adjust = Text("Weights Adjusted").next_to(error, DOWN)
        with self.voiceover(text="These gradients determine how much each weight contributes to the overall error. Weights are updated to reduce the error.") as tracker:
            self.play(Write(weight_adjust), run_time=tracker.duration)
        self.wait(0.2)

        # --- Iteration ---
        with self.voiceover(text="This forward and backward process is repeated iteratively to improve the network's accuracy.") as tracker:
            self.play(FadeOut(gradient_flow, gradient_flow_2, weight_adjust, error), run_time=tracker.duration)
        self.wait(0.2)

        # --- Network Improvement ---
        with self.voiceover(text="With each iteration, the network learns patterns and improves its ability to make accurate predictions.") as tracker:
            self.play(connections_1.animate.set_color(GREEN), connections_2.animate.set_color(GREEN), run_time=tracker.duration*0.5)
            self.play(connections_1.animate.set_color(GRAY), connections_2.animate.set_color(GRAY), run_time=tracker.duration*0.5)

        # --- Applications ---
        with self.voiceover(text="Backpropagation enables neural networks to learn complex functions, making them invaluable for various applications.") as tracker:
            applications = Text("Applications: Image Recognition, Natural Language Processing, etc.", font_size=24).to_edge(DOWN)
            self.play(Write(applications), run_time=tracker.duration)

        # --- Conclusion ---
        with self.voiceover(text="From image recognition to natural language processing, backpropagation empowers modern AI.") as tracker:
            self.play(title.animate.set_color(GREEN), run_time=tracker.duration)
        self.wait(1)
