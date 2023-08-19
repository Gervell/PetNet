import React from 'react'
import { ChevronRight, Home, Mail, Save } from "react-feather"
import { Link } from "react-router-dom"

export const Dashboard = () => {

    return (
        <>
        <div className="intro-y grid grid-cols-12 gap-6 mt-5">
            <div className="col-span-12 lg:col-span-6">
                <div className="intro-y box h-full">
                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 className="font-medium text-base mr-auto">
                            Welcome to Petri Net Tool (v1.0.0)
                        </h2>
                    </div>
                    <div className="p-5">
                        <div className="text-center lg:text-left p-5">
                            <div className="mb-3">This tool is focused on the most common class of PNs, called <em>place/transition net</em>. It is a purely logic model that does not aim to represent the occurrence time of events, but only the order in which events occur.</div>
                            <div className="mb-3">You first need to draw a net using the <strong>Petri Net Editor</strong> feature and then you can obtain a detailed <strong>Analysis</strong> of the net.</div>
                            <div className="mb-3">Several analysis techniques have been presented in the literature. In this tool I focused on <em>analysis by enumeration</em>, also called <em>behavioral analysis</em> that depends on initial marking and requires the construction of the <strong>reachability graph</strong> and <strong>reachability tree</strong> of the net representing the set of all reachable markings and transition firings, along with other several properties such as <strong>boundedness</strong>, <strong>liveness</strong> and <strong>reversibility</strong>.</div>
                            <div>The <em>structural analysis</em>, on the other hand, does not depend on initial marking but on the state equation of the net. It permits the analysis of properties related to the structure of the net such as <strong>incidence matrix</strong>, <strong>T-invariants</strong>, <strong>S-invariants</strong> and <strong>siphons & traps</strong>.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
                <div className="intro-y box h-full">
                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 className="font-medium text-base mr-auto">
                            Hints & Limitations
                        </h2>
                    </div>
                    <div className="p-5">
                        <div className="alert alert-pending show mb-2">
                            <div className="flex items-center">
                                <div className="font-medium text-lg">Unbounded nets NOT allowed!</div>
                                <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">Warning</div>
                            </div>
                            <div className="mt-3">The tool does not manage the situations in which the set of reachable markings is not a finite set (only reachability graph no coverability graph!).</div>
                        </div>
                        <div className="alert alert-warning show mb-2">
                            <div className="flex items-center">
                                <div className="font-medium text-lg">Save net before analysis!</div>
                                <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">Hint</div>
                            </div>
                            <div className="mt-1">Use the button <Save className="inline relative top-7 w-5 w-5" /> on top of editor before going to analysis to avoid data inconsistency.</div>
                        </div>
                        <div className="alert alert-warning show mb-2">
                            <div className="flex items-center">
                                <div className="font-medium text-lg">Nodes in chronological order!</div>
                                <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">Hint</div>
                            </div>
                            <div className="mt-3">Places/Transitions are processed according to the order of insertion on editor canvas.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}