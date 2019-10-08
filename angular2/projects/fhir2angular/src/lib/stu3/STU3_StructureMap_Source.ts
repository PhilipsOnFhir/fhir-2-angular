import { STU3_Address } from './STU3_Address'
import { STU3_Annotation } from './STU3_Annotation'
import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_HumanName } from './STU3_HumanName'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Meta } from './STU3_Meta'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'
import { STU3_Ratio } from './STU3_Ratio'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SampledData } from './STU3_SampledData'
import { STU3_Signature } from './STU3_Signature'
import { STU3_StructureMapSourceListModeEnum } from './STU3_StructureMapSourceListModeEnum'
import { STU3_Timing } from './STU3_Timing'

export class STU3_StructureMap_Source      extends STU3_BackboneElement
{

   static def : string = 'StructureMap_Source';
   context : string ;
   min : string ;
   max : string ;
   type : string ;
   defaultValueBase64Binary : string ;
   defaultValueBoolean : boolean ;
   defaultValueCode : string ;
   defaultValueDate : string ;
   defaultValueDateTime : string ;
   defaultValueDecimal : string ;
   defaultValueId : string ;
   defaultValueInstant : string ;
   defaultValueInteger : string ;
   defaultValueMarkdown : string ;
   defaultValueOid : string ;
   defaultValuePositiveInt : string ;
   defaultValueString : string ;
   defaultValueTime : string ;
   defaultValueUnsignedInt : string ;
   defaultValueUri : string ;
   defaultValueAddress : STU3_Address ;
   defaultValueAge : string ;
   defaultValueAnnotation : STU3_Annotation ;
   defaultValueAttachment : STU3_Attachment ;
   defaultValueCodeableConcept : STU3_CodeableConcept ;
   defaultValueCoding : STU3_Coding ;
   defaultValueContactPoint : STU3_ContactPoint ;
   defaultValueCount : string ;
   defaultValueDistance : string ;
   defaultValueDuration : string ;
   defaultValueHumanName : STU3_HumanName ;
   defaultValueIdentifier : STU3_Identifier ;
   defaultValueMoney : string ;
   defaultValuePeriod : STU3_Period ;
   defaultValueQuantity : STU3_Quantity ;
   defaultValueRange : STU3_Range ;
   defaultValueRatio : STU3_Ratio ;
   defaultValueReference : STU3_Reference ;
   defaultValueSampledData : STU3_SampledData ;
   defaultValueSignature : STU3_Signature ;
   defaultValueTiming : STU3_Timing ;
   defaultValueMeta : STU3_Meta ;
   element : string ;
   listMode : STU3_StructureMapSourceListModeEnum ;
   variable : string ;
   condition : string ;
   check : string ;
}
